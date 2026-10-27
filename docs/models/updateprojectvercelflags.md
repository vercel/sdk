# UpdateProjectVercelFlags

## Example Usage

```typescript
import { UpdateProjectVercelFlags } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectVercelFlags = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabledAt`                                                                                                                                   | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | When Flags were enabled for the project, taken from the Flags settings row's `createdAt`. Recorded by `@api/api-feature-flags` on flags sync. |