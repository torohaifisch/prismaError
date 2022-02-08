const observationResolver = {
  Query: {
    observation: (_parent: any, args: any, ctx: any) => {
      return ctx.prisma.observation.findUnique({
        where: { observationId: args.observationId || undefined }
      });
    },
    observationList: (_parent: any, _args: any, ctx: any) => {
      return ctx.prisma.observation.findMany();
    }
  },
  Mutation: {
    createObservation: (_parent: any, args: any, ctx: any) => {
      return ctx.prisma.observation.create({ data: args });
    },
    updateObservation: (_parent: any, args: any, ctx: any) => {
      const { observationId, ...data } = args;
      return ctx.prisma.observation.update({ where: { observationId }, data });
    },
    deleteObservation: (_parent: any, args: any, ctx: any) => {
      return ctx.prisma.observation.delete({
        where: { observationId: args.observationId }
      });
    }
  }
};

export default observationResolver;
