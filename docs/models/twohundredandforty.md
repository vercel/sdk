# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndForty = {
  branch: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `branch`           | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |