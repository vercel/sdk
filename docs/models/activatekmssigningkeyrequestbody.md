# ActivateKmsSigningKeyRequestBody

## Example Usage

```typescript
import { ActivateKmsSigningKeyRequestBody } from "@vercel/sdk/models/activatekmssigningkeyop.js";

let value: ActivateKmsSigningKeyRequestBody = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `revokePreviousAfterHours`                                                                                                                                   | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | How many hours after activation the previously-active key should stop being used. Defaults to a 1 hour grace period so already-issued tokens keep verifying. |