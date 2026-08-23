# Sandbox

Specifies the default region and failover regions for sandboxes created in the project

## Example Usage

```typescript
import { Sandbox } from "@vercel/sdk/models/createprojectpassport.js";

let value: Sandbox = {
  region: "iad1",
  failoverRegions: [
    "sfo1",
    "cle1",
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `region`                                                                                    | [models.Region](../models/region.md)                                                        | :heavy_minus_sign:                                                                          | The Vercel region sandboxes in this project are created in by default.                      | iad1                                                                                        |
| `failoverRegions`                                                                           | [models.CreateProjectFailoverRegions](../models/createprojectfailoverregions.md)[]          | :heavy_minus_sign:                                                                          | The regions sandboxes in this project fall back to when they cannot be created in `region`. | [<br/>"sfo1",<br/>"cle1"<br/>]                                                              |