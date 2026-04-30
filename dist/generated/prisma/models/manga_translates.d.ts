import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model manga_translates
 *
 */
export type manga_translatesModel = runtime.Types.Result.DefaultSelection<Prisma.$manga_translatesPayload>;
export type AggregateManga_translates = {
    _count: Manga_translatesCountAggregateOutputType | null;
    _min: Manga_translatesMinAggregateOutputType | null;
    _max: Manga_translatesMaxAggregateOutputType | null;
};
export type Manga_translatesMinAggregateOutputType = {
    manga: string | null;
    language: string | null;
};
export type Manga_translatesMaxAggregateOutputType = {
    manga: string | null;
    language: string | null;
};
export type Manga_translatesCountAggregateOutputType = {
    manga: number;
    language: number;
    _all: number;
};
export type Manga_translatesMinAggregateInputType = {
    manga?: true;
    language?: true;
};
export type Manga_translatesMaxAggregateInputType = {
    manga?: true;
    language?: true;
};
export type Manga_translatesCountAggregateInputType = {
    manga?: true;
    language?: true;
    _all?: true;
};
export type Manga_translatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which manga_translates to aggregate.
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: Prisma.manga_translatesOrderByWithRelationInput | Prisma.manga_translatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.manga_translatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` manga_translates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned manga_translates
    **/
    _count?: true | Manga_translatesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Manga_translatesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Manga_translatesMaxAggregateInputType;
};
export type GetManga_translatesAggregateType<T extends Manga_translatesAggregateArgs> = {
    [P in keyof T & keyof AggregateManga_translates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateManga_translates[P]> : Prisma.GetScalarType<T[P], AggregateManga_translates[P]>;
};
export type manga_translatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.manga_translatesWhereInput;
    orderBy?: Prisma.manga_translatesOrderByWithAggregationInput | Prisma.manga_translatesOrderByWithAggregationInput[];
    by: Prisma.Manga_translatesScalarFieldEnum[] | Prisma.Manga_translatesScalarFieldEnum;
    having?: Prisma.manga_translatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Manga_translatesCountAggregateInputType | true;
    _min?: Manga_translatesMinAggregateInputType;
    _max?: Manga_translatesMaxAggregateInputType;
};
export type Manga_translatesGroupByOutputType = {
    manga: string;
    language: string;
    _count: Manga_translatesCountAggregateOutputType | null;
    _min: Manga_translatesMinAggregateOutputType | null;
    _max: Manga_translatesMaxAggregateOutputType | null;
};
export type GetManga_translatesGroupByPayload<T extends manga_translatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Manga_translatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Manga_translatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Manga_translatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Manga_translatesGroupByOutputType[P]>;
}>>;
export type manga_translatesWhereInput = {
    AND?: Prisma.manga_translatesWhereInput | Prisma.manga_translatesWhereInput[];
    OR?: Prisma.manga_translatesWhereInput[];
    NOT?: Prisma.manga_translatesWhereInput | Prisma.manga_translatesWhereInput[];
    manga?: Prisma.StringFilter<"manga_translates"> | string;
    language?: Prisma.StringFilter<"manga_translates"> | string;
};
export type manga_translatesOrderByWithRelationInput = {
    manga?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    _relevance?: Prisma.manga_translatesOrderByRelevanceInput;
};
export type manga_translatesWhereUniqueInput = Prisma.AtLeast<{
    manga_language?: Prisma.manga_translatesMangaLanguageCompoundUniqueInput;
    AND?: Prisma.manga_translatesWhereInput | Prisma.manga_translatesWhereInput[];
    OR?: Prisma.manga_translatesWhereInput[];
    NOT?: Prisma.manga_translatesWhereInput | Prisma.manga_translatesWhereInput[];
    manga?: Prisma.StringFilter<"manga_translates"> | string;
    language?: Prisma.StringFilter<"manga_translates"> | string;
}, "manga_language">;
export type manga_translatesOrderByWithAggregationInput = {
    manga?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    _count?: Prisma.manga_translatesCountOrderByAggregateInput;
    _max?: Prisma.manga_translatesMaxOrderByAggregateInput;
    _min?: Prisma.manga_translatesMinOrderByAggregateInput;
};
export type manga_translatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.manga_translatesScalarWhereWithAggregatesInput | Prisma.manga_translatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.manga_translatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.manga_translatesScalarWhereWithAggregatesInput | Prisma.manga_translatesScalarWhereWithAggregatesInput[];
    manga?: Prisma.StringWithAggregatesFilter<"manga_translates"> | string;
    language?: Prisma.StringWithAggregatesFilter<"manga_translates"> | string;
};
export type manga_translatesCreateInput = {
    manga: string;
    language: string;
};
export type manga_translatesUncheckedCreateInput = {
    manga: string;
    language: string;
};
export type manga_translatesUpdateInput = {
    manga?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type manga_translatesUncheckedUpdateInput = {
    manga?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type manga_translatesCreateManyInput = {
    manga: string;
    language: string;
};
export type manga_translatesUpdateManyMutationInput = {
    manga?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type manga_translatesUncheckedUpdateManyInput = {
    manga?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type manga_translatesOrderByRelevanceInput = {
    fields: Prisma.manga_translatesOrderByRelevanceFieldEnum | Prisma.manga_translatesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type manga_translatesMangaLanguageCompoundUniqueInput = {
    manga: string;
    language: string;
};
export type manga_translatesCountOrderByAggregateInput = {
    manga?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
};
export type manga_translatesMaxOrderByAggregateInput = {
    manga?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
};
export type manga_translatesMinOrderByAggregateInput = {
    manga?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
};
export type manga_translatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    manga?: boolean;
    language?: boolean;
}, ExtArgs["result"]["manga_translates"]>;
export type manga_translatesSelectScalar = {
    manga?: boolean;
    language?: boolean;
};
export type manga_translatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"manga" | "language", ExtArgs["result"]["manga_translates"]>;
export type $manga_translatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "manga_translates";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        manga: string;
        language: string;
    }, ExtArgs["result"]["manga_translates"]>;
    composites: {};
};
export type manga_translatesGetPayload<S extends boolean | null | undefined | manga_translatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload, S>;
export type manga_translatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<manga_translatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Manga_translatesCountAggregateInputType | true;
};
export interface manga_translatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['manga_translates'];
        meta: {
            name: 'manga_translates';
        };
    };
    /**
     * Find zero or one Manga_translates that matches the filter.
     * @param {manga_translatesFindUniqueArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends manga_translatesFindUniqueArgs>(args: Prisma.SelectSubset<T, manga_translatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Manga_translates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {manga_translatesFindUniqueOrThrowArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends manga_translatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, manga_translatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Manga_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindFirstArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends manga_translatesFindFirstArgs>(args?: Prisma.SelectSubset<T, manga_translatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Manga_translates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindFirstOrThrowArgs} args - Arguments to find a Manga_translates
     * @example
     * // Get one Manga_translates
     * const manga_translates = await prisma.manga_translates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends manga_translatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, manga_translatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Manga_translates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manga_translates
     * const manga_translates = await prisma.manga_translates.findMany()
     *
     * // Get first 10 Manga_translates
     * const manga_translates = await prisma.manga_translates.findMany({ take: 10 })
     *
     * // Only select the `manga`
     * const manga_translatesWithMangaOnly = await prisma.manga_translates.findMany({ select: { manga: true } })
     *
     */
    findMany<T extends manga_translatesFindManyArgs>(args?: Prisma.SelectSubset<T, manga_translatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Manga_translates.
     * @param {manga_translatesCreateArgs} args - Arguments to create a Manga_translates.
     * @example
     * // Create one Manga_translates
     * const Manga_translates = await prisma.manga_translates.create({
     *   data: {
     *     // ... data to create a Manga_translates
     *   }
     * })
     *
     */
    create<T extends manga_translatesCreateArgs>(args: Prisma.SelectSubset<T, manga_translatesCreateArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Manga_translates.
     * @param {manga_translatesCreateManyArgs} args - Arguments to create many Manga_translates.
     * @example
     * // Create many Manga_translates
     * const manga_translates = await prisma.manga_translates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends manga_translatesCreateManyArgs>(args?: Prisma.SelectSubset<T, manga_translatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Manga_translates.
     * @param {manga_translatesDeleteArgs} args - Arguments to delete one Manga_translates.
     * @example
     * // Delete one Manga_translates
     * const Manga_translates = await prisma.manga_translates.delete({
     *   where: {
     *     // ... filter to delete one Manga_translates
     *   }
     * })
     *
     */
    delete<T extends manga_translatesDeleteArgs>(args: Prisma.SelectSubset<T, manga_translatesDeleteArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Manga_translates.
     * @param {manga_translatesUpdateArgs} args - Arguments to update one Manga_translates.
     * @example
     * // Update one Manga_translates
     * const manga_translates = await prisma.manga_translates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends manga_translatesUpdateArgs>(args: Prisma.SelectSubset<T, manga_translatesUpdateArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Manga_translates.
     * @param {manga_translatesDeleteManyArgs} args - Arguments to filter Manga_translates to delete.
     * @example
     * // Delete a few Manga_translates
     * const { count } = await prisma.manga_translates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends manga_translatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, manga_translatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manga_translates
     * const manga_translates = await prisma.manga_translates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends manga_translatesUpdateManyArgs>(args: Prisma.SelectSubset<T, manga_translatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Manga_translates.
     * @param {manga_translatesUpsertArgs} args - Arguments to update or create a Manga_translates.
     * @example
     * // Update or create a Manga_translates
     * const manga_translates = await prisma.manga_translates.upsert({
     *   create: {
     *     // ... data to create a Manga_translates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manga_translates we want to update
     *   }
     * })
     */
    upsert<T extends manga_translatesUpsertArgs>(args: Prisma.SelectSubset<T, manga_translatesUpsertArgs<ExtArgs>>): Prisma.Prisma__manga_translatesClient<runtime.Types.Result.GetResult<Prisma.$manga_translatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesCountArgs} args - Arguments to filter Manga_translates to count.
     * @example
     * // Count the number of Manga_translates
     * const count = await prisma.manga_translates.count({
     *   where: {
     *     // ... the filter for the Manga_translates we want to count
     *   }
     * })
    **/
    count<T extends manga_translatesCountArgs>(args?: Prisma.Subset<T, manga_translatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Manga_translatesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Manga_translatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Manga_translatesAggregateArgs>(args: Prisma.Subset<T, Manga_translatesAggregateArgs>): Prisma.PrismaPromise<GetManga_translatesAggregateType<T>>;
    /**
     * Group by Manga_translates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manga_translatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends manga_translatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: manga_translatesGroupByArgs['orderBy'];
    } : {
        orderBy?: manga_translatesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, manga_translatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManga_translatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the manga_translates model
     */
    readonly fields: manga_translatesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for manga_translates.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__manga_translatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the manga_translates model
 */
export interface manga_translatesFieldRefs {
    readonly manga: Prisma.FieldRef<"manga_translates", 'String'>;
    readonly language: Prisma.FieldRef<"manga_translates", 'String'>;
}
/**
 * manga_translates findUnique
 */
export type manga_translatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter, which manga_translates to fetch.
     */
    where: Prisma.manga_translatesWhereUniqueInput;
};
/**
 * manga_translates findUniqueOrThrow
 */
export type manga_translatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter, which manga_translates to fetch.
     */
    where: Prisma.manga_translatesWhereUniqueInput;
};
/**
 * manga_translates findFirst
 */
export type manga_translatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: Prisma.manga_translatesOrderByWithRelationInput | Prisma.manga_translatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for manga_translates.
     */
    cursor?: Prisma.manga_translatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` manga_translates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Prisma.Manga_translatesScalarFieldEnum | Prisma.Manga_translatesScalarFieldEnum[];
};
/**
 * manga_translates findFirstOrThrow
 */
export type manga_translatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: Prisma.manga_translatesOrderByWithRelationInput | Prisma.manga_translatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for manga_translates.
     */
    cursor?: Prisma.manga_translatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` manga_translates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Prisma.Manga_translatesScalarFieldEnum | Prisma.Manga_translatesScalarFieldEnum[];
};
/**
 * manga_translates findMany
 */
export type manga_translatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter, which manga_translates to fetch.
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of manga_translates to fetch.
     */
    orderBy?: Prisma.manga_translatesOrderByWithRelationInput | Prisma.manga_translatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing manga_translates.
     */
    cursor?: Prisma.manga_translatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` manga_translates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` manga_translates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of manga_translates.
     */
    distinct?: Prisma.Manga_translatesScalarFieldEnum | Prisma.Manga_translatesScalarFieldEnum[];
};
/**
 * manga_translates create
 */
export type manga_translatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * The data needed to create a manga_translates.
     */
    data: Prisma.XOR<Prisma.manga_translatesCreateInput, Prisma.manga_translatesUncheckedCreateInput>;
};
/**
 * manga_translates createMany
 */
export type manga_translatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many manga_translates.
     */
    data: Prisma.manga_translatesCreateManyInput | Prisma.manga_translatesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * manga_translates update
 */
export type manga_translatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * The data needed to update a manga_translates.
     */
    data: Prisma.XOR<Prisma.manga_translatesUpdateInput, Prisma.manga_translatesUncheckedUpdateInput>;
    /**
     * Choose, which manga_translates to update.
     */
    where: Prisma.manga_translatesWhereUniqueInput;
};
/**
 * manga_translates updateMany
 */
export type manga_translatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update manga_translates.
     */
    data: Prisma.XOR<Prisma.manga_translatesUpdateManyMutationInput, Prisma.manga_translatesUncheckedUpdateManyInput>;
    /**
     * Filter which manga_translates to update
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * Limit how many manga_translates to update.
     */
    limit?: number;
};
/**
 * manga_translates upsert
 */
export type manga_translatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * The filter to search for the manga_translates to update in case it exists.
     */
    where: Prisma.manga_translatesWhereUniqueInput;
    /**
     * In case the manga_translates found by the `where` argument doesn't exist, create a new manga_translates with this data.
     */
    create: Prisma.XOR<Prisma.manga_translatesCreateInput, Prisma.manga_translatesUncheckedCreateInput>;
    /**
     * In case the manga_translates was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.manga_translatesUpdateInput, Prisma.manga_translatesUncheckedUpdateInput>;
};
/**
 * manga_translates delete
 */
export type manga_translatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
    /**
     * Filter which manga_translates to delete.
     */
    where: Prisma.manga_translatesWhereUniqueInput;
};
/**
 * manga_translates deleteMany
 */
export type manga_translatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which manga_translates to delete
     */
    where?: Prisma.manga_translatesWhereInput;
    /**
     * Limit how many manga_translates to delete.
     */
    limit?: number;
};
/**
 * manga_translates without action
 */
export type manga_translatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manga_translates
     */
    select?: Prisma.manga_translatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the manga_translates
     */
    omit?: Prisma.manga_translatesOmit<ExtArgs> | null;
};
//# sourceMappingURL=manga_translates.d.ts.map