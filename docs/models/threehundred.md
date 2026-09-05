# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundred = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `region`           | *string*           | :heavy_minus_sign: | N/A                |
| `failoverRegions`  | *string*[]         | :heavy_minus_sign: | N/A                |