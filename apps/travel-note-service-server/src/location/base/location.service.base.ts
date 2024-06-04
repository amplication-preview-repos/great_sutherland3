/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Location as PrismaLocation,
  Trip as PrismaTrip,
} from "@prisma/client";

export class LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LocationCountArgs, "select">): Promise<number> {
    return this.prisma.location.count(args);
  }

  async locations<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<PrismaLocation[]> {
    return this.prisma.location.findMany<Prisma.LocationFindManyArgs>(args);
  }
  async location<T extends Prisma.LocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>
  ): Promise<PrismaLocation | null> {
    return this.prisma.location.findUnique(args);
  }
  async createLocation<T extends Prisma.LocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationCreateArgs>
  ): Promise<PrismaLocation> {
    return this.prisma.location.create<T>(args);
  }
  async updateLocation<T extends Prisma.LocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>
  ): Promise<PrismaLocation> {
    return this.prisma.location.update<T>(args);
  }
  async deleteLocation<T extends Prisma.LocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>
  ): Promise<PrismaLocation> {
    return this.prisma.location.delete(args);
  }

  async getTrip(parentId: string): Promise<PrismaTrip | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .trip();
  }
}
