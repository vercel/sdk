# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndEighty = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |