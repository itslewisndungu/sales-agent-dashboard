import { http, HttpResponse } from "msw";
import { COLLECTIONS, INVOICES, SCHOOLS } from "./betterMockData";
import { Collection, Invoice } from "../app/types/types";

export const handlers = [
  http.get("http://localhost:3000/schools", () => {
    return HttpResponse.json(SCHOOLS);
  }),

  http.get("http://localhost:3000/upcoming-invoices", () => {
    return HttpResponse.json(
      INVOICES.filter(
        (invoice) =>
          new Date(invoice.dueDate) >= new Date() ||
          invoice.status === "pending",
      ).slice(0, 10),
    );
  }),

  http.post<any, { invoice: Invoice }>(
    "http://localhost:3000/invoices",
    async ({ request }) => {
      const { invoice } = await request.json();
      INVOICES.push(invoice);
      return HttpResponse.json({ success: true });
    },
  ),

  http.patch<{ invoiceId: string }, { invoiceData: Partial<Invoice> }>(
    "http://localhost:3000/invoices/:invoiceId",
    async ({ request, params }) => {
      const { invoiceId } = params;

      const invoice = INVOICES.find((invoice) => invoice.id === +invoiceId);

      if (!invoice) {
        return HttpResponse.json(
          {
            success: false,
            message: "Invoice not found",
          },
          { status: 404 },
        );
      }

      const { invoiceData } = await request.json();

      Object.assign(invoice, invoiceData);
      INVOICES[+invoiceId - 1] = invoice;
      return HttpResponse.json({ success: true });
    },
  ),

  http.delete(
    "http://localhost:3000/invoices/:invoiceId",
    async ({ params }) => {
      const { invoiceId } = params;
      INVOICES.splice(+invoiceId - 1, 1);
      return HttpResponse.json({ success: true });
    },
  ),

  http.post<any, { amountPaid: number }>(
    "http://localhost:3000/invoices/:invoiceId/collect",
    async ({ params, request }) => {
      const { invoiceId } = params;
      const { amountPaid } = await request.json();

      const collection: Collection = {
        id: COLLECTIONS.length + 1,
        schoolName: INVOICES[+invoiceId - 1].school.name,
        invoiceNumber: `INV-${invoiceId.toString().padStart(3, "0")}`,
        amount: amountPaid,
        status: "valid",
        date: new Date().toISOString(),
      };

      COLLECTIONS.push(collection);
      return HttpResponse.json({ success: true });
    },
  ),

  http.get("http://localhost:3000/schools/:schoolID/invoices", ({ params }) => {
    const { schoolID } = params;

    const schoolInvoices = INVOICES.filter(
      (invoice) => invoice.school.id === +schoolID,
    );

    return HttpResponse.json(schoolInvoices);
  }),

  http.get(
    "http://localhost:3000/schools/:schoolID/collections",
    ({ params }) => {
      const { schoolID } = params;

      const schoolCollections = INVOICES.filter(
        (invoice) => invoice.school.id === +schoolID,
      );

      return HttpResponse.json(COLLECTIONS);
    },
  ),

  http.get(
    "http://localhost:3000/invoices/:invoiceNumber/collections",
    ({ params }) => {
      const { invoiceNumber } = params;

      const invoiceCollections = COLLECTIONS.filter(
        (collection) => collection.invoiceNumber === invoiceNumber,
      );

      return HttpResponse.json(invoiceCollections);
    },
  ),

  http.patch<{ collectionID: string }, { status: "valid" | "bounced" }>(
    "http://localhost:3000/collections/:collectionID",
    async ({ request, params }) => {
      const { collectionID } = params;

      const { status } = await request.json();

      const collection = COLLECTIONS.find(
        (collection) => collection.id === +collectionID,
      );

      if (!collection) {
        return HttpResponse.json(
          {
            success: false,
            message: "Collection not found",
          },
          { status: 404 },
        );
      }

      collection.status = status;
      COLLECTIONS[+collectionID - 1] = collection;
      return HttpResponse.json({ success: true });
    },
  ),
];
