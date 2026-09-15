# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: TwoHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "unfinished-quart.org",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `configuredBy`     | *string*           | :heavy_minus_sign: | N/A                |
| `prevConfiguredBy` | *string*           | :heavy_minus_sign: | N/A                |