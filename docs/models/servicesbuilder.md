# ServicesBuilder

Builder selected by the resolver.

## Example Usage

```typescript
import { ServicesBuilder } from "@vercel/sdk/models/servicesbuilder.js";

let value: ServicesBuilder = {
  use: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `use`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `src`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [models.CancelDeploymentServicesConfig](../models/canceldeploymentservicesconfig.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |