# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndFiftyTwo = {
  domain: "impeccable-cope.name",
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