"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

const interestItems = [
  { label: "Selecciona una opción", value: null },
  ...interests.map((label) => ({ label, value: label })),
];

const emptyValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

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
        className="border-t border-[var(--line)] pt-10 animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <p className="text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Mensaje recibido
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--quiet)]">
          Gracias por escribirnos. Revisamos cada consulta con calma y te
          contactamos en horario de estudio ({siteConfig.contact.hours}). También
          puedes escribirnos por{" "}
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
        <Button
          type="button"
          variant="link"
          className="mt-8 h-auto px-0 text-[0.72rem] tracking-[0.18em] uppercase"
          onClick={() => setStatus("idle")}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <FieldGroup className="gap-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Field data-invalid={!!errors.name || undefined}>
            <FieldLabel
              htmlFor="name"
              className="label-micro font-normal text-[var(--quiet)]"
            >
              Nombre
            </FieldLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              className={cn("reui-underline", errors.name && "border-destructive")}
              placeholder="Tu nombre"
            />
            <FieldError>{errors.name}</FieldError>
          </Field>

          <Field data-invalid={!!errors.email || undefined}>
            <FieldLabel
              htmlFor="email"
              className="label-micro font-normal text-[var(--quiet)]"
            >
              Correo
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              className={cn("reui-underline", errors.email && "border-destructive")}
              placeholder="tu@correo.com"
            />
            <FieldError>{errors.email}</FieldError>
          </Field>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Field data-invalid={!!errors.phone || undefined}>
            <FieldLabel
              htmlFor="phone"
              className="label-micro font-normal text-[var(--quiet)]"
            >
              Teléfono / WhatsApp
            </FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              className={cn("reui-underline", errors.phone && "border-destructive")}
              placeholder="+52 951 000 0000"
            />
            <FieldError>{errors.phone}</FieldError>
          </Field>

          <Field data-invalid={!!errors.interest || undefined}>
            <FieldLabel
              htmlFor="interest"
              className="label-micro font-normal text-[var(--quiet)]"
            >
              Interés
            </FieldLabel>
            <Select
              items={interestItems}
              value={values.interest || null}
              onValueChange={(value) =>
                update("interest", typeof value === "string" ? value : "")
              }
            >
              <SelectTrigger
                id="interest"
                aria-invalid={!!errors.interest}
                className={cn(
                  "reui-underline h-auto w-full justify-between rounded-none px-0 shadow-none focus-visible:ring-0",
                  errors.interest && "border-destructive"
                )}
              >
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent
                alignItemWithTrigger={false}
                className="rounded-xl border-[var(--line)] bg-[var(--paper)]"
              >
                <SelectGroup>
                  {interestItems
                    .filter((item) => item.value !== null)
                    .map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldError>{errors.interest}</FieldError>
          </Field>
        </div>

        <Field data-invalid={!!errors.message || undefined}>
          <FieldLabel
            htmlFor="message"
            className="label-micro font-normal text-[var(--quiet)]"
          >
            Cuéntanos sobre tu proyecto
          </FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            className={cn(
              "reui-underline min-h-32 resize-y",
              errors.message && "border-destructive"
            )}
            placeholder="Ubicación del predio, tipo de proyecto, tiempos aproximados…"
          />
          <FieldError>{errors.message}</FieldError>
        </Field>

        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        ) : null}

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full md:w-auto md:min-w-[12rem]"
        >
          {status === "loading" ? "Enviando…" : "Enviar consulta"}
        </Button>
      </FieldGroup>
    </form>
  );
}
