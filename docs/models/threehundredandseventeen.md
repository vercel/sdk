# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndSeventeen = {
  enabled: true,
  updatedAt: 746.19,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |