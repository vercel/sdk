# DefaultDeployment

## Example Usage

```typescript
import { DefaultDeployment } from "@vercel/sdk/models/connecttriggerdestinationinput.js";

let value: DefaultDeployment = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Project that receives matching trigger requests.                           |
| `path`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Route path on the linked project that receives forwarded trigger requests. |