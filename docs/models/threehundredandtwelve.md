# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndTwelve = {
  enabled: true,
  totpVerified: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `totpVerified`     | *boolean*          | :heavy_check_mark: | N/A                |