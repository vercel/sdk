# TwoHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyThree } from "@vercel/sdk/models/environment.js";

let value: TwoHundredAndNinetyThree = {
  domain: "rotating-typewriter.net",
  ips: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ips`              | *string*[]         | :heavy_check_mark: | N/A                |