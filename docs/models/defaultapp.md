# DefaultApp

The default app for the new microfrontend group

## Example Usage

```typescript
import { DefaultApp } from "@vercel/sdk/models/createmicrofrontendsgroupwithapplicationsop.js";

let value: DefaultApp = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the project that will be used as the default app for the new microfrontend group |
| `defaultRoute`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | The default route for the default app of the new microfrontend group                       |