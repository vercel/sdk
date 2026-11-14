# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/edgeconfig.js";

let value: TwoHundredAndTwentyThree = {
  logDrainUrl: "https://silver-configuration.name/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
| `logDrainUrl`      | *string*           | :heavy_check_mark: | N/A                |