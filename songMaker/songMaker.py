import pygame.midi
# 48-72

trebleSharps = ['tC1', 'tCs1', 'tD1', 'tDs1', 'tE1', 'tF1', 'tFs1', 'tG1', 'tGs1', 'tA2', 'tAs2', 'tB2', 'tC2', 'tCs2', 'tD2', 'tDs2', 'tE2', 'tF2', 'tFs2', 'tG2', 'tGs2', 'tA3', 'tAs3', 'tB3', 'tC3']
trebleFlats = ['tC1', 'tDb1', 'tD1', 'tEb1', 'tE1', 'tF1', 'tGb1', 'tG1', 'tAb2', 'tA2', 'tBb2', 'tB2', 'tC2', 'tDb2', 'tD2', 'tEb2', 'tE2', 'tF2', 'tGb2', 'tG2', 'tAb3', 'tA3', 'tBb3', 'tB3', 'tC3']

bassSharps = ['bC1', 'bCs1', 'bD1', 'bDs1', 'bE1', 'bF1', 'bFs1', 'bG1', 'bGs1', 'bA1', 'bAs1', 'bB1', 'bC2', 'bCs2', 'bD2', 'bDs2', 'bE2', 'bF2', 'bFs2', 'bG2', 'bGs2', 'bA2', 'bAs2', 'bB2', 'bC3']
bassFlats = ['bC1', 'bDb1', 'bD1', 'bEb1', 'bE1', 'bF1', 'bGb1', 'bG1', 'bAb1', 'bA1', 'bBb1', 'bB1', 'bC2', 'bDb2', 'bD2', 'bEb2', 'bE2', 'bF2', 'bGb2', 'bG2', 'bAb2', 'bA2', 'bBb2', 'bB2', 'bC3']


def readInput(input_device):
    result = '['
    i = 0
    while True:
        if input_device.poll():
            event = input_device.read(1)
            if i%2 == 0:
                # sustain button ends program
                if event[0][0][2] == 127:
                    break
                result += bassFlats[event[0][0][1]-48] + ', '
            i += 1
    return result[:-2] + ']'

if __name__ == '__main__':
    pygame.midi.init()
    my_input = pygame.midi.Input(0) 
    array = readInput(my_input)
    print(array)