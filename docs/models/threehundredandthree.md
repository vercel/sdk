# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/environment.js";

let value: ThreeHundredAndThree = {
  enabled: false,
  totpVerified: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `totpVerified`     | *boolean*          | :heavy_check_mark: | N/A                |