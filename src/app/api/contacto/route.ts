import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (
      name.length < 2 ||
      !email.includes("@") ||
      phone.length < 8 ||
      !interest ||
      message.length < 20
    ) {
      return NextResponse.json(
        { ok: false, error: "Datos incompletos" },
        { status: 400 }
      );
    }

    // Mock submit: log locally and return success. Swap for email/CRM later.
    console.info("[KAO contacto mock]", {
      name,
      email,
      phone,
      interest,
      message,
      receivedAt: new Date().toISOString(),
    });

    await new Promise((r) => setTimeout(r, 450));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Error de servidor" }, { status: 500 });
  }
}
