import { FilterQuery } from "mongoose";

export const paginationPipeLine = <T extends Record<string, any>>(
  page = "1",
  size = "10",
  filter: FilterQuery<T> = {},
) => {
  const limit = Number(size);
  const skip = (Number(page) - 1) * limit;

  return [
    {
      $match: {
        ...filter,
      },
    },
    {
      $facet: {
        total: [
          {
            $count: "count",
          },
        ],
        data: [],
      },
    },
    {
      $unwind: "$total",
    },
    {
      $project: {
        items: {
          $slice: [
            "$data",
            skip,
            {
              $ifNull: [limit, "$total.count"],
            },
          ],
        },
        pageIndex: {
          $literal: skip / limit + 1,
        },
        hasNextPage: {
          $lt: [{ $multiply: [limit, Number(page)] }, "$total.count"],
        },
        totalPages: {
          $ceil: {
            $divide: ["$total.count", limit],
          },
        },
        totalItems: "$total.count",
      },
    },
  ];
};
