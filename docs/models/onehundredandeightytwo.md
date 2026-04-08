# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: OneHundredAndEightyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "honorable-lid.name",
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