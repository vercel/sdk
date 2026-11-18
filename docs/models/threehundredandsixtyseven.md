# ThreeHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySeven } from "@vercel/sdk/models/payloadaws.js";

let value: ThreeHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `failoverRegions`  | *string*[]         | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `region`           | *string*           | :heavy_minus_sign: | N/A                |