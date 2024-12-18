/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Period for the billing cycle.
 */
export type Period = {
  start: Date;
  end: Date;
};

export type BillingItems = {
  /**
   * Partner's billing plan ID.
   */
  billingPlanId: string;
  /**
   * Partner's resource ID.
   */
  resourceId?: string | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  start?: Date | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  end?: Date | undefined;
  /**
   * Line item name.
   */
  name: string;
  /**
   * Line item details.
   */
  details?: string | undefined;
  /**
   * Price per unit.
   */
  price: string;
  /**
   * Quantity of units.
   */
  quantity: number;
  /**
   * Units of the quantity.
   */
  units: string;
  /**
   * Total amount.
   */
  total: string;
};

export type Discounts = {
  /**
   * Partner's billing plan ID.
   */
  billingPlanId: string;
  /**
   * Partner's resource ID.
   */
  resourceId?: string | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  start?: Date | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  end?: Date | undefined;
  /**
   * Discount name.
   */
  name: string;
  /**
   * Discount details.
   */
  details?: string | undefined;
  /**
   * Discount amount.
   */
  amount: string;
};

export type Billing2 = {
  items: Array<BillingItems>;
  discounts?: Array<Discounts> | undefined;
};

export type Billing1 = {
  /**
   * Partner's billing plan ID.
   */
  billingPlanId: string;
  /**
   * Partner's resource ID.
   */
  resourceId?: string | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  start?: Date | undefined;
  /**
   * Start and end are only needed if different from the period's start/end.
   */
  end?: Date | undefined;
  /**
   * Line item name.
   */
  name: string;
  /**
   * Line item details.
   */
  details?: string | undefined;
  /**
   * Price per unit.
   */
  price: string;
  /**
   * Quantity of units.
   */
  quantity: number;
  /**
   * Units of the quantity.
   */
  units: string;
  /**
   * Total amount.
   */
  total: string;
};

/**
 * Billing data (interim invoicing data).
 */
export type SubmitBillingDataBilling = Billing2 | Array<Billing1>;

/**
 * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
 */
export const SubmitBillingDataType = {
  Total: "total",
  Interval: "interval",
  Rate: "rate",
} as const;
/**
 * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
 */
export type SubmitBillingDataType = ClosedEnum<typeof SubmitBillingDataType>;

export type Usage = {
  /**
   * Partner's resource ID.
   */
  resourceId: string;
  /**
   * Metric name.
   */
  name: string;
  /**
   * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
   */
  type: SubmitBillingDataType;
  /**
   * Metric units. Example: \"GB\"
   */
  units: string;
  /**
   * Metric value for the day. Could be a final or an interim value for the day.
   */
  dayValue: number;
  /**
   * Metric value for the billing period. Could be a final or an interim value for the period.
   */
  periodValue: number;
  /**
   * The limit value of the metric for a billing period, if a limit is defined by the plan.
   */
  planValue?: number | undefined;
};

export type SubmitBillingDataRequestBody = {
  timestamp: Date;
  eod: Date;
  /**
   * Period for the billing cycle.
   */
  period: Period;
  /**
   * Billing data (interim invoicing data).
   */
  billing: Billing2 | Array<Billing1>;
  usage: Array<Usage>;
};

export type SubmitBillingDataRequest = {
  integrationConfigurationId: string;
  requestBody: SubmitBillingDataRequestBody;
};

/** @internal */
export const Period$inboundSchema: z.ZodType<Period, z.ZodTypeDef, unknown> = z
  .object({
    start: z.string().datetime({ offset: true }).transform(v => new Date(v)),
    end: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  });

/** @internal */
export type Period$Outbound = {
  start: string;
  end: string;
};

/** @internal */
export const Period$outboundSchema: z.ZodType<
  Period$Outbound,
  z.ZodTypeDef,
  Period
> = z.object({
  start: z.date().transform(v => v.toISOString()),
  end: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Period$ {
  /** @deprecated use `Period$inboundSchema` instead. */
  export const inboundSchema = Period$inboundSchema;
  /** @deprecated use `Period$outboundSchema` instead. */
  export const outboundSchema = Period$outboundSchema;
  /** @deprecated use `Period$Outbound` instead. */
  export type Outbound = Period$Outbound;
}

export function periodToJSON(period: Period): string {
  return JSON.stringify(Period$outboundSchema.parse(period));
}

export function periodFromJSON(
  jsonString: string,
): SafeParseResult<Period, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Period$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Period' from JSON`,
  );
}

/** @internal */
export const BillingItems$inboundSchema: z.ZodType<
  BillingItems,
  z.ZodTypeDef,
  unknown
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  end: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  name: z.string(),
  details: z.string().optional(),
  price: z.string(),
  quantity: z.number(),
  units: z.string(),
  total: z.string(),
});

/** @internal */
export type BillingItems$Outbound = {
  billingPlanId: string;
  resourceId?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  name: string;
  details?: string | undefined;
  price: string;
  quantity: number;
  units: string;
  total: string;
};

/** @internal */
export const BillingItems$outboundSchema: z.ZodType<
  BillingItems$Outbound,
  z.ZodTypeDef,
  BillingItems
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.date().transform(v => v.toISOString()).optional(),
  end: z.date().transform(v => v.toISOString()).optional(),
  name: z.string(),
  details: z.string().optional(),
  price: z.string(),
  quantity: z.number(),
  units: z.string(),
  total: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillingItems$ {
  /** @deprecated use `BillingItems$inboundSchema` instead. */
  export const inboundSchema = BillingItems$inboundSchema;
  /** @deprecated use `BillingItems$outboundSchema` instead. */
  export const outboundSchema = BillingItems$outboundSchema;
  /** @deprecated use `BillingItems$Outbound` instead. */
  export type Outbound = BillingItems$Outbound;
}

export function billingItemsToJSON(billingItems: BillingItems): string {
  return JSON.stringify(BillingItems$outboundSchema.parse(billingItems));
}

export function billingItemsFromJSON(
  jsonString: string,
): SafeParseResult<BillingItems, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillingItems$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillingItems' from JSON`,
  );
}

/** @internal */
export const Discounts$inboundSchema: z.ZodType<
  Discounts,
  z.ZodTypeDef,
  unknown
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  end: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  name: z.string(),
  details: z.string().optional(),
  amount: z.string(),
});

/** @internal */
export type Discounts$Outbound = {
  billingPlanId: string;
  resourceId?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  name: string;
  details?: string | undefined;
  amount: string;
};

/** @internal */
export const Discounts$outboundSchema: z.ZodType<
  Discounts$Outbound,
  z.ZodTypeDef,
  Discounts
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.date().transform(v => v.toISOString()).optional(),
  end: z.date().transform(v => v.toISOString()).optional(),
  name: z.string(),
  details: z.string().optional(),
  amount: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Discounts$ {
  /** @deprecated use `Discounts$inboundSchema` instead. */
  export const inboundSchema = Discounts$inboundSchema;
  /** @deprecated use `Discounts$outboundSchema` instead. */
  export const outboundSchema = Discounts$outboundSchema;
  /** @deprecated use `Discounts$Outbound` instead. */
  export type Outbound = Discounts$Outbound;
}

export function discountsToJSON(discounts: Discounts): string {
  return JSON.stringify(Discounts$outboundSchema.parse(discounts));
}

export function discountsFromJSON(
  jsonString: string,
): SafeParseResult<Discounts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Discounts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Discounts' from JSON`,
  );
}

/** @internal */
export const Billing2$inboundSchema: z.ZodType<
  Billing2,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(z.lazy(() => BillingItems$inboundSchema)),
  discounts: z.array(z.lazy(() => Discounts$inboundSchema)).optional(),
});

/** @internal */
export type Billing2$Outbound = {
  items: Array<BillingItems$Outbound>;
  discounts?: Array<Discounts$Outbound> | undefined;
};

/** @internal */
export const Billing2$outboundSchema: z.ZodType<
  Billing2$Outbound,
  z.ZodTypeDef,
  Billing2
> = z.object({
  items: z.array(z.lazy(() => BillingItems$outboundSchema)),
  discounts: z.array(z.lazy(() => Discounts$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Billing2$ {
  /** @deprecated use `Billing2$inboundSchema` instead. */
  export const inboundSchema = Billing2$inboundSchema;
  /** @deprecated use `Billing2$outboundSchema` instead. */
  export const outboundSchema = Billing2$outboundSchema;
  /** @deprecated use `Billing2$Outbound` instead. */
  export type Outbound = Billing2$Outbound;
}

export function billing2ToJSON(billing2: Billing2): string {
  return JSON.stringify(Billing2$outboundSchema.parse(billing2));
}

export function billing2FromJSON(
  jsonString: string,
): SafeParseResult<Billing2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Billing2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Billing2' from JSON`,
  );
}

/** @internal */
export const Billing1$inboundSchema: z.ZodType<
  Billing1,
  z.ZodTypeDef,
  unknown
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  end: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  name: z.string(),
  details: z.string().optional(),
  price: z.string(),
  quantity: z.number(),
  units: z.string(),
  total: z.string(),
});

/** @internal */
export type Billing1$Outbound = {
  billingPlanId: string;
  resourceId?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  name: string;
  details?: string | undefined;
  price: string;
  quantity: number;
  units: string;
  total: string;
};

/** @internal */
export const Billing1$outboundSchema: z.ZodType<
  Billing1$Outbound,
  z.ZodTypeDef,
  Billing1
> = z.object({
  billingPlanId: z.string(),
  resourceId: z.string().optional(),
  start: z.date().transform(v => v.toISOString()).optional(),
  end: z.date().transform(v => v.toISOString()).optional(),
  name: z.string(),
  details: z.string().optional(),
  price: z.string(),
  quantity: z.number(),
  units: z.string(),
  total: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Billing1$ {
  /** @deprecated use `Billing1$inboundSchema` instead. */
  export const inboundSchema = Billing1$inboundSchema;
  /** @deprecated use `Billing1$outboundSchema` instead. */
  export const outboundSchema = Billing1$outboundSchema;
  /** @deprecated use `Billing1$Outbound` instead. */
  export type Outbound = Billing1$Outbound;
}

export function billing1ToJSON(billing1: Billing1): string {
  return JSON.stringify(Billing1$outboundSchema.parse(billing1));
}

export function billing1FromJSON(
  jsonString: string,
): SafeParseResult<Billing1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Billing1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Billing1' from JSON`,
  );
}

/** @internal */
export const SubmitBillingDataBilling$inboundSchema: z.ZodType<
  SubmitBillingDataBilling,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Billing2$inboundSchema),
  z.array(z.lazy(() => Billing1$inboundSchema)),
]);

/** @internal */
export type SubmitBillingDataBilling$Outbound =
  | Billing2$Outbound
  | Array<Billing1$Outbound>;

/** @internal */
export const SubmitBillingDataBilling$outboundSchema: z.ZodType<
  SubmitBillingDataBilling$Outbound,
  z.ZodTypeDef,
  SubmitBillingDataBilling
> = z.union([
  z.lazy(() => Billing2$outboundSchema),
  z.array(z.lazy(() => Billing1$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitBillingDataBilling$ {
  /** @deprecated use `SubmitBillingDataBilling$inboundSchema` instead. */
  export const inboundSchema = SubmitBillingDataBilling$inboundSchema;
  /** @deprecated use `SubmitBillingDataBilling$outboundSchema` instead. */
  export const outboundSchema = SubmitBillingDataBilling$outboundSchema;
  /** @deprecated use `SubmitBillingDataBilling$Outbound` instead. */
  export type Outbound = SubmitBillingDataBilling$Outbound;
}

export function submitBillingDataBillingToJSON(
  submitBillingDataBilling: SubmitBillingDataBilling,
): string {
  return JSON.stringify(
    SubmitBillingDataBilling$outboundSchema.parse(submitBillingDataBilling),
  );
}

export function submitBillingDataBillingFromJSON(
  jsonString: string,
): SafeParseResult<SubmitBillingDataBilling, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitBillingDataBilling$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitBillingDataBilling' from JSON`,
  );
}

/** @internal */
export const SubmitBillingDataType$inboundSchema: z.ZodNativeEnum<
  typeof SubmitBillingDataType
> = z.nativeEnum(SubmitBillingDataType);

/** @internal */
export const SubmitBillingDataType$outboundSchema: z.ZodNativeEnum<
  typeof SubmitBillingDataType
> = SubmitBillingDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitBillingDataType$ {
  /** @deprecated use `SubmitBillingDataType$inboundSchema` instead. */
  export const inboundSchema = SubmitBillingDataType$inboundSchema;
  /** @deprecated use `SubmitBillingDataType$outboundSchema` instead. */
  export const outboundSchema = SubmitBillingDataType$outboundSchema;
}

/** @internal */
export const Usage$inboundSchema: z.ZodType<Usage, z.ZodTypeDef, unknown> = z
  .object({
    resourceId: z.string(),
    name: z.string(),
    type: SubmitBillingDataType$inboundSchema,
    units: z.string(),
    dayValue: z.number(),
    periodValue: z.number(),
    planValue: z.number().optional(),
  });

/** @internal */
export type Usage$Outbound = {
  resourceId: string;
  name: string;
  type: string;
  units: string;
  dayValue: number;
  periodValue: number;
  planValue?: number | undefined;
};

/** @internal */
export const Usage$outboundSchema: z.ZodType<
  Usage$Outbound,
  z.ZodTypeDef,
  Usage
> = z.object({
  resourceId: z.string(),
  name: z.string(),
  type: SubmitBillingDataType$outboundSchema,
  units: z.string(),
  dayValue: z.number(),
  periodValue: z.number(),
  planValue: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Usage$ {
  /** @deprecated use `Usage$inboundSchema` instead. */
  export const inboundSchema = Usage$inboundSchema;
  /** @deprecated use `Usage$outboundSchema` instead. */
  export const outboundSchema = Usage$outboundSchema;
  /** @deprecated use `Usage$Outbound` instead. */
  export type Outbound = Usage$Outbound;
}

export function usageToJSON(usage: Usage): string {
  return JSON.stringify(Usage$outboundSchema.parse(usage));
}

export function usageFromJSON(
  jsonString: string,
): SafeParseResult<Usage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Usage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Usage' from JSON`,
  );
}

/** @internal */
export const SubmitBillingDataRequestBody$inboundSchema: z.ZodType<
  SubmitBillingDataRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  eod: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  period: z.lazy(() => Period$inboundSchema),
  billing: z.union([
    z.lazy(() => Billing2$inboundSchema),
    z.array(z.lazy(() => Billing1$inboundSchema)),
  ]),
  usage: z.array(z.lazy(() => Usage$inboundSchema)),
});

/** @internal */
export type SubmitBillingDataRequestBody$Outbound = {
  timestamp: string;
  eod: string;
  period: Period$Outbound;
  billing: Billing2$Outbound | Array<Billing1$Outbound>;
  usage: Array<Usage$Outbound>;
};

/** @internal */
export const SubmitBillingDataRequestBody$outboundSchema: z.ZodType<
  SubmitBillingDataRequestBody$Outbound,
  z.ZodTypeDef,
  SubmitBillingDataRequestBody
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  eod: z.date().transform(v => v.toISOString()),
  period: z.lazy(() => Period$outboundSchema),
  billing: z.union([
    z.lazy(() => Billing2$outboundSchema),
    z.array(z.lazy(() => Billing1$outboundSchema)),
  ]),
  usage: z.array(z.lazy(() => Usage$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitBillingDataRequestBody$ {
  /** @deprecated use `SubmitBillingDataRequestBody$inboundSchema` instead. */
  export const inboundSchema = SubmitBillingDataRequestBody$inboundSchema;
  /** @deprecated use `SubmitBillingDataRequestBody$outboundSchema` instead. */
  export const outboundSchema = SubmitBillingDataRequestBody$outboundSchema;
  /** @deprecated use `SubmitBillingDataRequestBody$Outbound` instead. */
  export type Outbound = SubmitBillingDataRequestBody$Outbound;
}

export function submitBillingDataRequestBodyToJSON(
  submitBillingDataRequestBody: SubmitBillingDataRequestBody,
): string {
  return JSON.stringify(
    SubmitBillingDataRequestBody$outboundSchema.parse(
      submitBillingDataRequestBody,
    ),
  );
}

export function submitBillingDataRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SubmitBillingDataRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitBillingDataRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitBillingDataRequestBody' from JSON`,
  );
}

/** @internal */
export const SubmitBillingDataRequest$inboundSchema: z.ZodType<
  SubmitBillingDataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  integrationConfigurationId: z.string(),
  RequestBody: z.lazy(() => SubmitBillingDataRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SubmitBillingDataRequest$Outbound = {
  integrationConfigurationId: string;
  RequestBody: SubmitBillingDataRequestBody$Outbound;
};

/** @internal */
export const SubmitBillingDataRequest$outboundSchema: z.ZodType<
  SubmitBillingDataRequest$Outbound,
  z.ZodTypeDef,
  SubmitBillingDataRequest
> = z.object({
  integrationConfigurationId: z.string(),
  requestBody: z.lazy(() => SubmitBillingDataRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitBillingDataRequest$ {
  /** @deprecated use `SubmitBillingDataRequest$inboundSchema` instead. */
  export const inboundSchema = SubmitBillingDataRequest$inboundSchema;
  /** @deprecated use `SubmitBillingDataRequest$outboundSchema` instead. */
  export const outboundSchema = SubmitBillingDataRequest$outboundSchema;
  /** @deprecated use `SubmitBillingDataRequest$Outbound` instead. */
  export type Outbound = SubmitBillingDataRequest$Outbound;
}

export function submitBillingDataRequestToJSON(
  submitBillingDataRequest: SubmitBillingDataRequest,
): string {
  return JSON.stringify(
    SubmitBillingDataRequest$outboundSchema.parse(submitBillingDataRequest),
  );
}

export function submitBillingDataRequestFromJSON(
  jsonString: string,
): SafeParseResult<SubmitBillingDataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitBillingDataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitBillingDataRequest' from JSON`,
  );
}
