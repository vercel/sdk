# UpdateSandboxNetworkPolicy


## Supported Types

### `models.UpdateSandboxNetworkPolicy1`

```typescript
const value: models.UpdateSandboxNetworkPolicy1 = {
  mode: "custom",
  allowedDomains: [
    "api.github.com",
    "*.npmjs.org",
  ],
  allowedCIDRs: [
    "35.192.0.0/12",
    "104.16.0.0/12",
  ],
  deniedCIDRs: [
    "35.192.0.0/12",
  ],
};
```

### `models.UpdateSandboxNetworkPolicy2`

```typescript
const value: models.UpdateSandboxNetworkPolicy2 = {};
```

