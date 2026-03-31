# Tracing

Tracing configuration for this project

## Example Usage

```typescript
import { Tracing } from "@vercel/sdk/models/updateprojectprojectsresponse200action.js";

let value: Tracing = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `domains`                                            | *string*                                             | :heavy_minus_sign:                                   | Comma-separated list of drain endpoint domains       |
| `ignorePaths`                                        | *string*[]                                           | :heavy_minus_sign:                                   | Paths to ignore for tracing                          |
| `samplingRules`                                      | [models.SamplingRules](../models/samplingrules.md)[] | :heavy_minus_sign:                                   | Sampling rules for trace collection                  |