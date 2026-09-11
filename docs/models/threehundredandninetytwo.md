# ThreeHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyTwo } from "@vercel/sdk/models/usereventpayload339budget.js";

let value: ThreeHundredAndNinetyTwo = {
  domain: "jagged-juggernaut.biz",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ips`              | *string*[]         | :heavy_check_mark: | N/A                |