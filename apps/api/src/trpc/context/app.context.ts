import { Injectable } from '@nestjs/common';
import { type ContextOptions, type TRPCContext } from 'nestjs-trpc';

@Injectable()
export class AppContext implements TRPCContext {
  create(opt: ContextOptions) {
    return {
      req: opt.req as Request,
      res: opt.res as Response,
    };
  }
}
