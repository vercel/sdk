# GetMicrofrontendsInGroupInternalRoutes2

## Example Usage

```typescript
import { GetMicrofrontendsInGroupInternalRoutes2 } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupInternalRoutes2 = {
  has: [
    {
      type: "host",
      value: {
        eq: "<value>",
      },
    },
  ],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                                | *models.GetMicrofrontendsInGroupInternalRoutesHas*[]                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `mitigate`                                                                                                           | [models.GetMicrofrontendsInGroupInternalRoutesMitigate](../models/getmicrofrontendsingroupinternalroutesmitigate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `src`                                                                                                                | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |