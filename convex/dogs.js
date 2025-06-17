import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("dog").collect();
  },
});

export const get = query({
  args: { id: v.id("dog") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});