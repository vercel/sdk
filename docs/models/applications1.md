# Applications1

A list of the deployment routing information for each project.

## Example Usage

```typescript
import { Applications1 } from "@vercel/sdk/models/listaliasesop.js";

let value: Applications1 = {
  fallbackHost: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fallbackHost`                                                                                                                                                                        | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | This is always set. In production it is used as a pointer to each apps production deployment. For pre-production, it's used as the fallback if there is no deployment for the branch. |
| `projectId`                                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | The project ID of the microfrontends application.                                                                                                                                     |