# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/configchanges.js";

let value: TwoHundredAndEight = {
  logDrainUrl: "https://any-bend.com",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
| `logDrainUrl`      | *string*           | :heavy_check_mark: | N/A                |