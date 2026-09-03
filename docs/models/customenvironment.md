# CustomEnvironment

## Example Usage

```typescript
import { CustomEnvironment } from "@vercel/sdk/models/connecttriggerdestinationinput.js";

let value: CustomEnvironment = {
  projectId: "<id>",
  customEnvironmentId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Project that receives matching trigger requests.                           |
| `customEnvironmentId`                                                      | *string*                                                                   | :heavy_check_mark:                                                         | Stable custom environment ID that belongs to the destination project.      |
| `path`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Route path on the linked project that receives forwarded trigger requests. |