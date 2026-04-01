# OtherApplications

## Example Usage

```typescript
import { OtherApplications } from "@vercel/sdk/models/createmicrofrontendsgroupwithapplicationsop.js";

let value: OtherApplications = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The id of the project that will be used in the new microfrontend group |
| `defaultRoute`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The default route for the application in the new microfrontend group   |