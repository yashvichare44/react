import java.security.SecureRandom;
import java.util.Base64;

public class KeyGenerator {

    public static void main(String[] args) {
        // Generate a 256-bit (32-byte) secret key
        byte[] key = generateSecretKey(32); // 32 bytes = 256 bits

        // Encode the key as Base64 for storage or usage
        String base64Key = Base64.getEncoder().encodeToString(key);
        System.out.println("Generated 256-bit Secret Key: " + base64Key);
    }

    public static byte[] generateSecretKey(int keyLengthBytes) {
        SecureRandom secureRandom = new SecureRandom();
        byte[] key = new byte[keyLengthBytes];
        secureRandom.nextBytes(key);
        return key;
    }
}
