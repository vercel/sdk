# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: TwoHundredAndEightySeven = {
  domain: "adolescent-cook.name",
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