import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Seed Countries
  const countries = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      return prisma.country.create({
        data: {
          name: faker.address.country(),
        },
      });
    })
  );

  // Seed States
  const states = await Promise.all(
    countries.map(async (country) => {
      return prisma.state.create({
        data: {
          name: faker.address.state(),
          countryId: country.id,
        },
      });
    })
  );

  // Seed Cities
  const cities = await Promise.all(
    states.map(async (state) => {
      return prisma.city.create({
        data: {
          name: faker.address.city(),
          stateId: state.id,
        },
      });
    })
  );

  // Seed Authors
  const authors = await Promise.all(
    Array.from({ length: 10 }).map(async () => {
      const city = faker.helpers.arrayElement(cities);
      const state = await prisma.state.findUnique({ where: { id: city.stateId } });
      const country = await prisma.country.findUnique({ where: { id: state?.countryId } });

      return prisma.author.create({
        data: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          Dob: faker.date.past({years:50}).toISOString().split('T')[0],
          cityId: city.id,
          stateId: state!.id,
          countryId: country!.id,
        },
      });
    })
  );

  // Seed Books
  const books = await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      const author = faker.helpers.arrayElement(authors);

      return prisma.book.create({
        data: {
          name: faker.lorem.words(3),
          publishedAt: faker.date.past({years:10}),
          authors: {
            create: {
              authorId: author.id,
            },
          },
        },
      });
    })
  );

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
