"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message" | "interest", string>
>;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const interests = [
  "Residencial de alto nivel",
  "Remodelación",
  "Diseño de interiores",
  "Supervisión de obra",
  "Consultoría de sitio",
  "Otro",
] as const;

const emptyValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const fieldClass =
  "h-11 w-full rounded-none border border-[var(--line)] bg-[var(--paper)] px-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20";

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Indica tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Correo no válido.";
  }
  if (values.phone.trim().length < 8) {
    errors.phone = "Incluye un teléfono o WhatsApp.";
  }
  if (!values.interest) errors.interest = "Selecciona un interés.";
  if (values.message.trim().length < 20) {
    errors.message = "Cuéntanos un poco más (mín. 20 caracteres).";
  }
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState<FormValues>(emptyValues);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          interest: values.interest,
          message: values.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      setValues(emptyValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-[var(--line)] bg-[var(--mist)] px-6 py-10 animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-[var(--ink)]">Mensaje recibido</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--quiet)]">
          Gracias por escribirnos. Revisamos cada consulta con calma y te contactamos en
          horario de estudio ({siteConfig.contact.hours}). Si prefieres, también puedes
          escribirnos por{" "}
          <a
            href={siteConfig.contact.whatsappHref}
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 text-sm underline underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Tu nombre"
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo</Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="tu@correo.com"
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono / WhatsApp</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
            placeholder="+52 951 000 0000"
          />
          {errors.phone ? (
            <p id="phone-error" className="text-sm text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">Interés</Label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(e) => update("interest", e.target.value)}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.interest ? (
            <p id="interest-error" className="text-sm text-destructive">
              {errors.interest}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Cuéntanos sobre tu proyecto</Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "min-h-36 py-2")}
          placeholder="Ubicación del predio, tipo de proyecto, tiempos aproximados…"
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p
          className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          role="alert"
        >
          No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-none bg-[var(--ink)] px-8 text-[0.75rem] tracking-[0.16em] uppercase text-[var(--paper)] hover:bg-[var(--olive)]"
      >
        {status === "loading" ? "Enviando…" : "Enviar consulta"}
      </Button>

      <p className="text-xs text-[var(--quiet)]">
        Este formulario funciona en modo local/mock. Reemplaza el endpoint cuando conectes tu
        backend o CRM.
      </p>
    </form>
  );
}
