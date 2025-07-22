import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("dogs").collect();
  },
});

export const get = query({
  args: { id: v.id("dogs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const add = mutation({
  args: { 
    name: v.string(), 
    gender: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("dogs", { 
      name: args.name, 
      gender: args.gender 
    });
  },
});