# OneHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFive } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndTwentyFive = {
  domain: "grouchy-compromise.com",
  zone: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `zone`             | *boolean*          | :heavy_check_mark: | N/A                |