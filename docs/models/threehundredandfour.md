# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndFour = {
  domain: "prime-fishery.net",
  ips: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ips`              | *string*[]         | :heavy_check_mark: | N/A                |