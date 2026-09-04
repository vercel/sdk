# GetSandboxesResponseBody

## Example Usage

```typescript
import { GetSandboxesResponseBody } from "@vercel/sdk/models/getsandboxesop.js";

let value: GetSandboxesResponseBody = {
  sandboxes: [],
  pagination: {
    count: 4932.56,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `sandboxes`                                                          | [models.NamedSandbox](../models/namedsandbox.md)[]                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.GetSandboxesPagination](../models/getsandboxespagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |