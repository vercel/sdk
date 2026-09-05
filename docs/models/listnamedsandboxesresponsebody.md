# ListNamedSandboxesResponseBody

## Example Usage

```typescript
import { ListNamedSandboxesResponseBody } from "@vercel/sdk/models/listnamedsandboxesop.js";

let value: ListNamedSandboxesResponseBody = {
  sandboxes: [],
  pagination: {
    count: 2190.75,
    next: null,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sandboxes`                                                                      | [models.NamedSandbox](../models/namedsandbox.md)[]                               | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [models.ListNamedSandboxesPagination](../models/listnamedsandboxespagination.md) | :heavy_check_mark:                                                               | N/A                                                                              |