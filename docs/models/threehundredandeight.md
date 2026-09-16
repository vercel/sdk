# ThreeHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEight } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: ThreeHundredAndEight = {
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