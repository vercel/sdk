# OneHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyTwo } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndThirtyTwo = {
  domain: "corny-sonar.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `renew`            | *boolean*          | :heavy_minus_sign: | N/A                |