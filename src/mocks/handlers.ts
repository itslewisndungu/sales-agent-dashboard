import { delay, http, HttpResponse } from "msw";
import {
  mockCollectionsWithIds,
  mockSchools,
  mockUpcomingInvoices,
} from "./mockData";

export const handlers = [
  http.get("http://localhost:3000/schools", () => {
    return HttpResponse.json(mockSchools);
  }),

  http.get("http://localhost:3000/upcoming-invoices", () => {
    return HttpResponse.json(
      mockUpcomingInvoices
        .filter(
          (invoice) =>
            new Date(invoice.dueDate) >= new Date() ||
            invoice.status === "pending",
        )
        .slice(0, 10),
    );
  }),

  http.post("http://localhost:3000/invoices", async () => {
    await delay(1000);
    return HttpResponse.json({ success: true });
  }),

  http.patch<{ invoiceId: string }>(
    "http://localhost:3000/invoices/:invoiceId",
    async ({ request, params }) => {
      const { invoiceId } = params;

      // const invoice = mockUpcomingInvoices.find(
      //   // (invoice) => invoice.id === +invoiceId,
      // );
      //
      // if (!invoice) {
      //   return res(ctx.status(404));
      // }
      //
      // invoice.status = status;
      //
      // return res(ctx.json(invoice));

      await delay(1000);
      return HttpResponse.json({ success: true });
    },
  ),

  http.delete("http://localhost:3000/invoices/:invoiceId", async () => {
    await delay(1000);
    return HttpResponse.json({ success: true });
  }),

  http.post("http://localhost:3000/invoices/:invoiceId/collect", async () => {
    await delay(1000);
    return HttpResponse.json({ success: true });
  }),


  http.get("http://localhost:3000/schools/:schoolID/invoices", ({ params }) => {
    const { schoolID } = params;

    const schoolInvoices = mockUpcomingInvoices.filter(
      // (invoice) => invoice.school.id === +schoolID,
      (invoice) => true,
    );

    return HttpResponse.json(schoolInvoices);
  }),

  http.get(
    "http://localhost:3000/schools/:schoolID/collections",
    ({ params }) => {
      const { schoolID } = params;

      const schoolCollections = mockUpcomingInvoices.filter(
        // (invoice) => invoice.school.id === +schoolID,
        (invoice) => true,
      );

      return HttpResponse.json(mockCollectionsWithIds);
    },
  ),

  http.get(
    "http://localhost:3000/invoices/:invoiceNumber/collections",
    ({ params }) => {
      const { invoiceNumber } = params;

      const invoiceCollections = mockCollectionsWithIds.filter(
        (collection) => true,
      );

      return HttpResponse.json(invoiceCollections);
    },
  ),

  http.patch<{ collectionID: string }, { status: "valid" | "bounced" }>(
    "http://localhost:3000/collections/:collectionID",
    async ({ request, params }) => {
      const { collectionID } = params;

      const { status } = await request.json();

      // const collection = mockCollections.find(
      //   // (collection) => collection.id === +collectionID,
      // );
      //
      // if (!collection) {
      //   return res(ctx.status(404));
      // }
      //
      // collection.status = status;
      //
      // return res(ctx.json(collection));

      await delay(1000);
      return HttpResponse.json({ success: true });
    },
  ),
];
