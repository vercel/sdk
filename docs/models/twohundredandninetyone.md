# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: TwoHundredAndNinetyOne = {
  domain: "unpleasant-emergent.com",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `configuredBy`     | *string*           | :heavy_minus_sign: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `prevConfiguredBy` | *string*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_check_mark: | N/A                |