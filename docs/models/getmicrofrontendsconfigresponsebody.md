# GetMicrofrontendsConfigResponseBody

## Example Usage

```typescript
import { GetMicrofrontendsConfigResponseBody } from "@vercel/sdk/models/getmicrofrontendsconfigop.js";

let value: GetMicrofrontendsConfigResponseBody = {
  config: null,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `config`                                                                           | [models.GetMicrofrontendsConfigConfig](../models/getmicrofrontendsconfigconfig.md) | :heavy_check_mark:                                                                 | projectIds are added when the config is uploaded to s3 deployment assets.          |