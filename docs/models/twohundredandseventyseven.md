# TwoHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySeven } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: TwoHundredAndSeventySeven = {
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
  domain: "electric-tooth.org",
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