# TwoHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighteen } from "@vercel/sdk/models/payloadinitiator.js";

let value: TwoHundredAndEighteen = {
  logDrainUrl: "https://awesome-chainstay.org",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
| `logDrainUrl`      | *string*           | :heavy_check_mark: | N/A                |